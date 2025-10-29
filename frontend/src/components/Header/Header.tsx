export const Header = () => {
    return (
        <header style={{ marginBottom: 24, padding: 12, backgroundColor: '#0e1118ff' }}>
            <div
                className='container'
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <a
                    href='https://koala42.com'
                    target='_empty'
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                >
                    <img src='/koalaLogo.9762b7c2.svg' alt='' />
                    <img src='/koalaTextLogoWhite.f29e7997.svg' alt='' />
                </a>
                <a href='https://koala42.com' target="_empty" style={{ color: 'white' }}>
                    Web
                </a>
            </div>
        </header>
    );
};
