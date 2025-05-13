const DashboardLayouts = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-screen">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-xl">Dashboard Header</h1>
        </header>
        <main className="flex-1 p-4">{children}</main>
       
        <footer className="bg-gray-800 text-white p-4">
            <p>Dashboard Footer</p>
        </footer>
        </div>
    );
    }

export default DashboardLayouts;