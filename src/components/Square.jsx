import PropTypes from 'prop-types';
export const Square = ({ children, isSelected, updateboard, index }) => {
    const className = `square ${isSelected ? 'is-selected' : ''} `
    const handleClick = () => {
        updateboard(index);
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}
Square.propTypes = {
    children: PropTypes.node,                // Valida que 'children' sea cualquier contenido renderizable
    isSelected: PropTypes.bool.isRequired,   // Valida que 'isSelected' sea un booleano (obligatorio)
    updateboard: PropTypes.func.isRequired,  // Valida que 'updateboard' sea una función (obligatorio)
    index: PropTypes.number.isRequired,      // Valida que 'index' sea un número (obligatorio)
};

export default Square