import { render, screen, within } from '@testing-library/vue'
import { describe, it } from 'vitest'
import { testWithinProvider } from './testWithinProvider'

import DualProvider from './test-components/DualProvider.vue'

describe('Two providers', () => {
  it('increments value on click', async () => {
    render(DualProvider)

    const providerOne = screen.getByTestId('provider-1')
    const providerTwo = screen.getByTestId('provider-2')
    const providerlessThree = screen.getByTestId('pair-3')

    within(providerOne).getByText('Provider')
    within(providerTwo).getByText('Provider')

    /*

    Confirms that both providers are independent.

    This confirms that we are propely using the vue `provide` and `inject`
    APIs for passing around the jotai store.

    */
    await testWithinProvider(providerOne)
    await testWithinProvider(providerTwo)

    // Providerless works independently
    await testWithinProvider(providerlessThree)
  })
})
