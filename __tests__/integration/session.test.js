const {User} = require('../../src/app/models')

describe('Authentication', () => {

  it('should sum two numbers', () => {
    expect(2+2).toBe(4)

  })

  it('user', async () => {
    const user = await User.create({
      name: 'Edson',
      email: 'edsonc@rosa.com',
      password_hash: '123123'
    })

    expect(user.email).toBe('edsonc@rosa.com')
  })




})

