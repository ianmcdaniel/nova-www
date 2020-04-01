import cookie from 'cookie';

const DAYS_365 = 365 * 24 * 60 * 60 * 1000;

/**
 * Gets the expiration time for a cookie.
 *
 * @name getExpireTime
 * @param {Number} expiresIn - The amount of time (in ms) in the future to set the expire time
 *   to. Defaults to 365 days from now.
 * @returns {Date} The current date with the expiration time set.
 */
const getExpireTime = (expiresIn = DAYS_365) => {
	const expireDate = new Date();
	// Get the current time (in ms).
	const time = expireDate.getTime();
	// Get and set the expiration time on the date object.
	const expireTime = time + expiresIn;
	expireDate.setTime(expireTime);

	return expireDate;
};

const useCookie = (name, expireTime = DAYS_365) => ({
	get: () => (cookie.parse(document.cookie) || {})[name],
	set: val => {
		const expires = getExpireTime(expireTime);
		const newCookie = cookie.serialize(name, val, { expires });
		document.cookie = newCookie;

		return newCookie;
	},
});

export default useCookie;
