import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GarageSalePage from '../src/app/garage-sale/page'

// simplify complex component for testing
jest.mock('../src/app/components/AnimatedCard', () => (props: any) => <div {...props} />)

describe('GarageSalePage', () => {
  it('changes displayed items when reroll button is clicked', async () => {
    render(<GarageSalePage />)
    const user = userEvent.setup()

    const first = screen.getAllByText(/ - /).map(el => el.textContent)
    await user.click(screen.getByRole('button', { name: /reroll/i }))
    const second = screen.getAllByText(/ - /).map(el => el.textContent)

    expect(second.join()).not.toBe(first.join())
  })
})
