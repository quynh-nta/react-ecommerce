import React, { useState } from 'react';
import Popup from '../common/popup/popup';

interface UpdateAdminPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit?: (formData: any) => void;
}

const UpdateAdminPopup: React.FC<UpdateAdminPopupProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (onSubmit) {
        onSubmit(formData);
      }
    };

    return (
        <Popup isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} title="Update Admin">
            <div className="update-admin-popup">
                <h2 className='text-center bold-500'>Update Admin</h2>
                <form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name= "email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </form>
            </div>
        </Popup>
    );
};

export default UpdateAdminPopup;