import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo.png";

function App() {
    const [showIntro, setShowIntro] = useState(true);
    const [activeSection, setActiveSection] = useState("inicio");

    useEffect(() => {
        const timer = setTimeout(() => setShowIntro(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        key="intro"
                        className="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.img
                            src={logo}
                            alt="Logo Evanari"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="intro-logo"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {!showIntro && (
                <div className="app">
                    <nav className="menu">
                        <img src={logo} alt="Logo Evanari" className="menu-logo" />
                        <ul>
                            <li onClick={() => setActiveSection("inicio")}>Inicio</li>
                            <li onClick={() => setActiveSection("tienda")}>Tienda</li>
                            <li onClick={() => setActiveSection("contacto")}>Contacto</li>
                        </ul>
                    </nav>

                    {activeSection === "inicio" && (
                        <motion.div
                            className="inicio"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {/* Fondo animado */}
                            <motion.div
                                className="fondo-animado"
                                animate={{ backgroundPositionX: ["0%", "100%"] }}
                                transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: "linear" }}
                            />
                        </motion.div>
                    )}

                    {activeSection === "tienda" && (
                        <div className="tienda">
                            {/* Aquí iría tu tienda */}
                        </div>
                    )}

                    {activeSection === "contacto" && (
                        <div className="contacto">
                            <h2>Contacto</h2>
                            <p>Email: contacto@evanari.com</p>
                            <p>Tel: 123 456 789</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default App;






