import {Link} from 'react-router-dom'

const Navbar = () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/about">About</Link> */}
                            <a class="nav-link active" href='#about1' >About</a>
                        </li>
                        
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/forms">Forms</Link> */}
                            <a class="nav-link active" href='#services1' >Services</a>
                        </li>
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/best">Best</Link> */}
                            <a class="nav-link active" href='#best1' >Best Sellings</a>
                        </li>
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/makelist">Make</Link> */}
                            <a class="nav-link active" href='#make1' >Make</a>
                        </li>
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/vehiclelist">Vehicle</Link> */}
                            <a class="nav-link active" href='#vehicle1' >Vehichle</a>
                        </li>
                        <li class="nav-item">
                            {/* <Link class="nav-link active" aria-current="page" to="/contact">Contact</Link> */}
                            <a class="nav-link active" href='#contact1' >Contact</a>
                        </li>
                    </ul>
                    
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar