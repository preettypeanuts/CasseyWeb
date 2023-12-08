import BASE_URL from '@/app/BaseURL';
import { useState } from 'react';

export const RemoveBtn = ({ handleRemove }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        await handleRemove();
        setLoading(false);
    };

    return (
        <button
            onClick={handleClick}
            disabled={loading}
            className="mt-2 text-center text-black border-2 border-gradient-to-br border-gradient-to-br from-blue-800 to-red-600 hover:bg-gradient-to-bl hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-Montserrat font-semibold rounded-full text-sm px-5 py-2.5"
        >
            {loading ? 'Removing...' : 'Remove'}
            <i className="bx bx-trash" />
        </button>
    );
};
