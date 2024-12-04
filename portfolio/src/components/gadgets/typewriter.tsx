import { useEffect, useState } from "react";

function TypeWriter() {
    const words = ["Game Development", "Web Development", "Software Engineering", "Machine Learning", "Computer Graphics", "Project Management",];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [index, setIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(200);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[loopNum % words.length];
            setText(isDeleting ? currentWord.substring(0, index - 1) : currentWord.substring(0, index + 1));
            setIndex(isDeleting ? index - 1 : index + 1);

            if (!isDeleting && index === currentWord.length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && index === 0) {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }

            setTypingSpeed(isDeleting ? 100 : 200);
        };

        const typingTimeout = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [index, isDeleting, loopNum, typingSpeed, words]);

    return (
        <div style={{ minHeight: '2.5em' }}>
            <h1 id="typewriter" className="text-3xl font-bold text-[#ff8c44]">{text}</h1>
        </div>
    );
}

export default TypeWriter;
