import { useRef } from 'react';
import './styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (ev: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return <form className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
    }}
    >
        <input type="text"
            placeholder="Enter something..."
            className="input__box"
            value={todo}
            ref={inputRef}
            onChange={
                (ev) => setTodo(ev.target.value)

            }
        />
        <button className="input__submit" type="submit">Add</button>
    </form>;
};

export default InputField;
