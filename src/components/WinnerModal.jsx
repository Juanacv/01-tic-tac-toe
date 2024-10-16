import PropTypes from 'prop-types';
import Square from './Square';

export function WinnerModal({ winner, resetGame }) {
    if (winner === null) return null;

    const WinnerText = winner === false ? 'Empate' : `Ganó ${winner}`;

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{WinnerText}</h2>
                <header className='win'>
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={resetGame}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    );
}

WinnerModal.propTypes = {
    winner: PropTypes.bool.isRequired,      // 'winner' es un booleano obligatorio
    resetGame: PropTypes.func.isRequired,   // 'resetGame' es una función obligatoria
};
