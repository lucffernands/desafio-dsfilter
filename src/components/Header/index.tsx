import { useContext } from 'react';
import { ContextListCount } from '../../utils/context-listing';
import './styles.css';

export default function Header() {

    const { contextListCount } = useContext(ContextListCount);

    return (
        <header>
            <div className="dsf-header-content dsf-container">
                <h1>DSFilter</h1>
                <p>{contextListCount} produtos(s)</p>
            </div>
        </header>
    );
}