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

    const productos = [
        { id: 1, nombre: "Camiseta negra", precio: "20€" },
        { id: 2, nombre: "Sudadera verde", precio: "35€" },
        { id: 3, nombre: "Pantalón denim", precio: "40€" },
    ];

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
                            alt="Evanari Logo"
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
                        <img src={logo} alt="Evanari Logo" className="menu-logo" />
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
                            <h1>Evanari</h1>
                            <p>Tu estilo, tu esencia.</p>
                        </motion.div>
                    )}

                    {activeSection === "tienda" && (
                        <motion.div
                            className="tienda"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            {productos.map((prod) => (
                                <motion.div
                                    key={prod.id}
                                    className="producto"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: prod.id * 0.2 }}
                                >
                                    <h3>{prod.nombre}</h3>
                                    <p>{prod.precio}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeSection === "contacto" && (
                        <motion.div
                            className="contacto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <h2>Contacto</h2>
                            <p>Email: contacto@evanari.com</p>
                            <p>Tel: 123 456 789</p>
                        </motion.div>
                    )}
                </div>
            )}
        </>
    );
}

export default App;






