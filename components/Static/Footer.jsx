export default function Footer() {
    return (
        <div className="mt-3 pt-3 footer sm:flex items-center justify-between">
            <h5 className="text-sm w-full sm:w-auto text-center sm:text-left">&copy; {new Date().getFullYear()}, Adithi</h5>
            <h5 className="text-sm w-full sm:w-auto text-center sm:text-right">Developed with ♥ by Adithi</h5>
        </div>
    );
};