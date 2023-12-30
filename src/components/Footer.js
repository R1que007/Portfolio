import React from 'react'


const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
           <footer className='Footer'>{`Copyright ©  ${year} Enrique Aguirre`}
           </footer>
       </>
    )
}

export default Footer