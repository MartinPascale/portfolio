import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GarageSalePage from '../src/app/garage-sale/page'

// simplify complex component for testing
jest.mock('../src/app/components/AnimatedCard', () => (props: any) => <div {...props} />)
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { unoptimized, ...rest } = props
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />
  },
}))

describe('GarageSalePage', () => {
  const getDisplayedNames = () =>
    screen.getAllByRole('img').map((img) => img.getAttribute('alt'))

  it('changes displayed items when reroll button is clicked', async () => {
    render(<GarageSalePage />)
    const user = userEvent.setup()

    const first = getDisplayedNames()
    await user.click(screen.getByRole('button', { name: /reroll/i }))
    const second = getDisplayedNames()

    expect(second.join()).not.toBe(first.join())
  })

  it('decrements money and disables button when out of cash', async () => {
    render(<GarageSalePage />)
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: /reroll/i })
    const counter = screen.getByTestId('money')

    expect(counter).toHaveTextContent('Money: $20')
    await user.click(button)
    expect(counter).toHaveTextContent('Money: $15')
    await user.click(button)
    expect(counter).toHaveTextContent('Money: $10')
    await user.click(button)
    expect(counter).toHaveTextContent('Money: $5')
    await user.click(button)
    expect(counter).toHaveTextContent('Money: $0')
    expect(button).toBeDisabled()
  })
})
