import React from 'react'

export default function GoogleMap() {
    return (
        <>
            <div className="Map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55998.899573432755!2d77.07307014863278!3d28.691703899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03da5230bdab%3A0x39364def7757986e!2sTranspeed%20Cargo%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1742193003720!5m2!1sen!2sin"
                    width="100%"
                    height={350}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </>
    )
}
