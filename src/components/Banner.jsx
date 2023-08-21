import '../Styles/Banner.css'

// composant children qui distingue les bannières.
function Banner({children}) { 
    return (
        <div>
            {children}
        </div>
    )
}

export default Banner