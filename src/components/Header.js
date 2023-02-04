export const Header = () => {

    const headerItems = ['Home', 'Work Experience','Skills', 'Projects', 'Certifications','Contact']

    return (
        <div class='header'>
            <ul>
                {
                    headerItems.map(element => {
                    return <li key={element}>{element}</li>  
                    })
                }
            </ul>
        </div>
        
    )
}