import Link from 'next/link'
import styles from 'styles/Plans.module.css'

const Plans = () => {
  return (
    <div>
      <p style={{fontSize: '48px'}}>Plans page</p>
      <Link href='/checkout' passHref>
        <button>Checkout</button>
      </Link>
    </div>
  )
}

export default Plans