import { fireEvent, within } from '@testing-library/vue'

export async function testWithinProvider(
  provider: HTMLElement = document.documentElement,
) {
  const counterOne = within(provider).getByTestId('counter-1')
  const counterTwo = within(provider).getByTestId('counter-2')

  // Ensure starting state
  within(counterOne).getByText('Times clicked: 0')
  within(counterTwo).getByText('Times clicked: 0')

  const button = within(counterOne).getByText('increment')
  const button2 = within(counterTwo).getByText('increment')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  within(counterOne).getByText('Times clicked: 2')
  within(counterTwo).getByText('Times clicked: 2')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button2)
  await fireEvent.click(button2)

  within(counterOne).getByText('Times clicked: 4')
  within(counterTwo).getByText('Times clicked: 4')
}
