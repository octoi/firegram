import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export default function ImageGrid({ setSelectedImg }) {
    const { docs } = useFirestore("images");
    console.log(docs)

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div
                    key={doc.id}
                    className="img-wrap"
                    onClick={() => setSelectedImg(doc.url)}
                    whileHover={{ opacity: 1 }}
                    layout
                >
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        src={doc.url}
                        alt={doc.id}
                        transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}
