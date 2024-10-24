const Header = ({title = 'default', subtitle = 'default'}) => {
    return (
        <>
            <span>Title: </span>
            <span>{title}</span>
            <span>Subtitle: </span>
            <span>{subtitle}</span>
        </>
    );
}

export default Header;