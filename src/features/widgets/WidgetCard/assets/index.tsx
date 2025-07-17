import trophySVG from './trophy.svg'
import graphSVG from './graph.svg'
import moneySVG from './money.svg'
import cartSVG from './cart.svg'
import starSVG from './star.svg'
import boxSVG from './box.svg'

const Assets = {
  positive: (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.5 14.25C6.31 14.25 6.12 14.18 5.97 14.03C5.68 13.74 5.68 13.26 5.97 12.97L9.17 9.77C9.33 9.61 9.54 9.53 9.77 9.55C9.99 9.57 10.19 9.69 10.32 9.88L11.41 11.52L14.96 7.97C15.25 7.68 15.73 7.68 16.02 7.97C16.31 8.26 16.31 8.74 16.02 9.03L11.82 13.23C11.66 13.39 11.45 13.47 11.22 13.45C11 13.43 10.8 13.31 10.67 13.12L9.58 11.48L7.03 14.03C6.88 14.18 6.69 14.25 6.5 14.25Z"
        fill="#292D32"
      />
      <path
        d="M15.5 11.25C15.09 11.25 14.75 10.91 14.75 10.5V9.25H13.5C13.09 9.25 12.75 8.91 12.75 8.5C12.75 8.09 13.09 7.75 13.5 7.75H15.5C15.91 7.75 16.25 8.09 16.25 8.5V10.5C16.25 10.91 15.91 11.25 15.5 11.25Z"
        fill="#292D32"
      />
    </svg>
  ),
  negative: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.5 15.25C16.31 15.25 16.12 15.18 15.97 15.03L12.42 11.48L11.33 13.12C11.21 13.31 11 13.43 10.78 13.45C10.55 13.47 10.33 13.39 10.18 13.23L6.98 10.03C6.69 9.74 6.69 9.26 6.98 8.97C7.27 8.68 7.75 8.68 8.04 8.97L10.59 11.52L11.68 9.88C11.8 9.7 12 9.58 12.23 9.55C12.46 9.53 12.68 9.61 12.83 9.77L17.03 13.97C17.32 14.26 17.32 14.74 17.03 15.03C16.88 15.18 16.69 15.25 16.5 15.25Z"
        fill="#292D32"
      />
      <path
        d="M16.5 15.25H14.5C14.09 15.25 13.75 14.91 13.75 14.5C13.75 14.09 14.09 13.75 14.5 13.75H15.75V12.5C15.75 12.09 16.09 11.75 16.5 11.75C16.91 11.75 17.25 12.09 17.25 12.5V14.5C17.25 14.91 16.91 15.25 16.5 15.25Z"
        fill="#292D32"
      />
    </svg>
  ),
}

const svg = { box: boxSVG, cart: cartSVG, star: starSVG, graph: graphSVG, money: moneySVG, trophy: trophySVG }

export { Assets }
export default svg as { [key: string]: string }
