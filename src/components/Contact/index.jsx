import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        objet: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_05po6ft', 'template_fb2hhhm', formData, 'E1APwjhejGF75B6m3')
            .then((result) => {
                alert('Message envoyé avec succès !');
            }, (error) => {
                alert('Une erreur est survenue, veuillez réessayer.');
            });

        setFormData({
            nom: '',
            prenom: '',
            objet: '',
            message: ''
        });
    };

    return (
        <div id="contact" className="container-contact">
            <h2 className="title-contact">Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prenom">Prénom</label>
                    <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="objet">Objet</label>
                    <input
                        type="text"
                        id="objet"
                        name="objet"
                        value={formData.objet}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;
