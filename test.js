const createNowFetch = require('.')

describe('nowFetch()', () => {
  it('works', () => {
    const nowFetch = createNowFetch()
    const request = nowFetch('/v2/now/deployments').then(res => res.json())
    return expect(request).resolves.toEqual(
      expect.objectContaining({
        deployments: expect.any(Array)
      })
    )
  })
})
