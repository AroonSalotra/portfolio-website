import { useState, useEffect } from "react"

const Navbar = () => {
    const [display, setDisplay] = useState("")

    const listContent = [
        { text: "Home", id: "1", },
        { text: "About", id: "2" },
        { text: "Contact", id: "3" },
        { text: "Work", id: "4" },
    ]

    const handleClick = (e) => {
        let index;
        switch (e.target.id) {
            case "1":
                index = 0
                break;
            case "2":
                index = 570
                break;
            case "3":
                index = 1270
                break;
            default:
                return null
        }
        window.scroll(0, index)
    }

    // setInterval(() => {
    //     console.log(window.scrollY)

    //     if (window.scrollY > 200) {
    //         setDisplay("navbar-fixed")
    //     } else {
    //         setDisplay("")
    //     }
    // }, 2000)


    useEffect(() => {
        const handleScroll = event => {

          console.log('window.scrollY', window.scrollY);

          if (window.scrollY > 200) {
            setDisplay("navbar-fixed")
        } else {
            setDisplay("")
        }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);



    return (
            <ul className={`navbar-content ${display}`}>
                {listContent.map(({ text, id }) =>
                    <li key={text} id={id} onClick={handleClick} >{text}</li>
                )}
            </ul>
        
    );
}

export default Navbar;