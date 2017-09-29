import { isValid, any } from 'shapely'

const checkValid = (type, data) => {
    try {
        return isValid(type, data)
    } catch (e) {
        return data instanceof type
    }
};

export { checkValid, any }