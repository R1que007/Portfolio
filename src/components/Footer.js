import React from 'react'


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
           <footer className='Footer'>{`©  ${year} Enrique Aguirre`}
           </footer>
       </>
    )
}

export default Footer