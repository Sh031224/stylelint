// NOTICE: This file is generated by Rollup. To modify it,
// please instead edit the ESM counterpart and rebuild with Rollup (npm run build).
'use strict';

/**
 * Returns the plural form of the given word.
 *
 * @param {string} singular
 * @param {number} count
 * @returns {string}
 */
function pluralize(singular, count) {
	return count === 1 ? singular : `${singular}s`;
}

module.exports = pluralize;