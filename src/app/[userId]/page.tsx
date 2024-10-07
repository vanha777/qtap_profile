import { Auth } from '@/lib/auth';
import { Theme, User } from '../../../themeConfig';
import themeConfig from '../../../themeConfig';
import ProfileComponent from '@/components/profileComponent';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import LoadingAnimation from '@/components/loadingAnimation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { userId: string } }): Promise<Metadata> {
    const { userId } = params;
    const pathName = userId.replace('@', '');

    let { data, error } = await Auth
        .from('users')
        .select('*')
        .eq('username', pathName)
        .single();


    data.name = `${data.first_name} ${data.last_name}`;

    if (error) {
        return {
            title: 'Not Found',
            description: 'The page you are looking for does not exist.'
        };
    }

    return {
        title: `Biz-Profile: ${data?.name}`,
        description: data?.bio || 'User profile',
        openGraph: {
            title: `Biz-Profile: ${data?.name}`,
            description: data?.bio || 'User profile',
            images: [{ url: data?.photo || '' }],
            url: `https://biz-touch.me/${data?.username}`,
        },
    };
}

export default async function ProfilePage({ params }: { params: { userId: string } }) {
    const { userId } = params;
    const pathName = userId.replace('@', '');

    let { data, error } = await Auth
        .from('users')
        .select('*')
        .eq('username', pathName)
        .single();

    if (error) {
        redirect('https://biz-touch.vercel.app');
    }

    data.name = `${data.first_name} ${data.last_name}`;
    const cssTheme = themeConfig[data.theme] || themeConfig[''];
    const daisyTheme = cssTheme.daisy;
console.log("testing 134 ,",data);
    return (
        <div data-theme={daisyTheme}>
            <Suspense fallback={<LoadingAnimation />}>
                <ProfileComponent theme={cssTheme} user={data} />
            </Suspense>
        </div>
    );
}
