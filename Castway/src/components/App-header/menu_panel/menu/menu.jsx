import './menu.css';

function Menu() {
  return (
    <nav className="general_page_header">
      <div className="overlay"></div>
      <button className="mobile_menu mobile_menu_open" href="#">
        <span className="mobile_menu_span_close"></span>
        <span className="mobile_menu_span_close"></span>
        <span className="mobile_menu_span_close"></span>
      </button>

      <div className="page_header_block_one no_display">
        <div className="page_header_block_one_logo">Logo</div>

        <nav className="page_header_block_one_menu">
          <a className="page_header_block_one_menu_a" href="#">
            Home
          </a>
          <a className="page_header_block_one_menu_a" href="#">
            About us
          </a>
          <a className="page_header_block_one_menu_a" href="#">
            Services
          </a>
          <a className="page_header_block_one_menu_a" href="#">
            News
          </a>
          <a className="page_header_block_one_menu_a" href="#">
            Contacts
          </a>
        </nav>

        <div className="page_header_block_contacts">Contacts</div>
      </div>
    </nav>
  );
}

// Header - Mobile menu Open and Close - Start --------------------

// function CloseMobileMenu() {
//   const headerBlockOne = document.querySelector('.page_header_block_one');
//   headerBlockOne.classList.toggle('no_display');

//   const overlay = document.querySelector('.overlay');
//   overlay.classList.toggle('overlay_open');

//   const spanCentralBurgerMenue = document.querySelectorAll(
//     '.mobile_menu_span_close',
//   )[1];
//   spanCentralBurgerMenue.classList.toggle('mobile_menu_central_span_open');

//   const spanTopBurgerMenue = document.querySelectorAll(
//     '.mobile_menu_span_close',
//   )[0];
//   spanTopBurgerMenue.classList.toggle('mobile_menu_top_span_open');

//   const spanBottomBurgerMenue = document.querySelectorAll(
//     '.mobile_menu_span_close',
//   )[2];
//   spanBottomBurgerMenue.classList.toggle('mobile_menu_button_span_open');
// }

// document
//   .querySelector('.mobile_menu')
//   .addEventListener('click', CloseMobileMenu);
// document.querySelector('.overlay').addEventListener('click', CloseMobileMenu);
// document
//   .querySelector('.page_header_block_one')
//   .addEventListener('click', CloseMobileMenu);

// Header - Mobile menu Open and Close - Start --------------------

export default Menu;
