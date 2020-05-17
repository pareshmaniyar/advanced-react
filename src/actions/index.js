export const toggleSwitch = text => ({
    type: 'TOGGLE',
    text
})

export const switchOn = text => ({
    type: 'ON',
    text
})

export const switchOff = text => ({
    type: 'OFF',
    text
})

export const changeName = name => ({
    type: 'CHANGE_NAME',
    name
})