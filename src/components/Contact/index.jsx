import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from '../Modal/index.jsx';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        mobile: '',
        objet: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors //
        setErrors({});

        // Check for errors //
        let formErrors = {};
        if (!formData.nom) formErrors.nom = 'Le nom est requis';
        if (!formData.prenom) formErrors.prenom = 'Le prénom est requis';
        if (!formData.email) {
            formErrors.email = 'L\'email est requis';
        } else if (!validateEmail(formData.email)) {
            formErrors.email = 'L\'email n\'est pas valide';
        }
        if (!formData.mobile) formErrors.mobile = 'Le numéro de mobile est requis';
        if (!formData.objet) formErrors.objet = 'L\'objet est requis';
        if (!formData.message) formErrors.message = 'Le message est requis';

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        emailjs.send('service_05po6ft', 'template_fb2hhhm', formData, 'E1APwjhejGF75B6m3')
            .then((result) => {
                setModalInfo({
                    show: true,
                    title: 'Succès',
                    message: 'Message envoyé avec succès !'
                });
            }, (error) => {
                setModalInfo({
                    show: true,
                    title: 'Erreur',
                    message: 'Une erreur est survenue, veuillez réessayer.'
                });
            });


        setFormData({
            nom: '',
            prenom: '',
            email: '',
            mobile: '',
            objet: '',
            message: ''
        });
    };

    const closeModal = () => {
        setModalInfo({ show: false, title: '', message: '' });
    };

    return (
        <div id="contact" className="container-contact">
            <h2 className="title-contact">Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="nom">Votre nom</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                    {errors.nom && <p className="error-message">{errors.nom}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Votre prénom</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />
                    {errors.prenom && <p className="error-message">{errors.prenom}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Votre email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        autoComplete='none'
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Votre n° de mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                    />
                    {errors.mobile && <p className="error-message">{errors.mobile}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="objet">Objet de votre demande</label>
                    <input
                        type="text"
                        id="objet"
                        name="objet"
                        value={formData.objet}
                        onChange={handleChange}
                        required
                    />
                    {errors.objet && <p className="error-message">{errors.objet}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Votre message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {errors.message && <p className="error-message">{errors.message}</p>}
                </div>
                <button type="submit" className="submit-button">Envoyer</button>
            </form>
            <Modal
                show={modalInfo.show}
                onClose={closeModal}
                title={modalInfo.title}
                message={modalInfo.message}
            />
        </div>
    );
}

export default Contact;
