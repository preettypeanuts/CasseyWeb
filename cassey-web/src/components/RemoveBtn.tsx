import { useState } from 'react';
import Swal from 'sweetalert2';

interface RemoveBtnProps {
    handleRemove: () => Promise<void>;
}

export const RemoveBtn: React.FC<RemoveBtnProps> = ({ handleRemove }) => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            await handleRemove();
            setLoading(false);
            Swal.fire({
                icon: 'success',
                title: 'Item Removed',
                showConfirmButton: false,
                timer: 1500
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            setLoading(false);
            console.error('Error removing item:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to remove item',
            });
        }
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
