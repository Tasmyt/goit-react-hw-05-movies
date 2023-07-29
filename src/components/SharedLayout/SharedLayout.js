import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Section, Header } from './Layout.styled';

export const Layout = () => {
    return (
        <>
    <Section>
    <nav>
        <Header to='/'>Home</Header>
        <Header to ='/movies'>Movies</Header>
    </nav>
    </Section>
    <main>
        <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense>
    </main>
    </>
)};