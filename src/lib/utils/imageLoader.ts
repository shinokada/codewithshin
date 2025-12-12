/**
 * Dimension thresholds for validating loaded images
 */
export const IMAGE_VALIDATION = {
	/** Minimum width for GitHub stats/profile images */
	GITHUB_MIN_WIDTH: 100,
	/** Minimum height for GitHub stats/profile images */
	GITHUB_MIN_HEIGHT: 50,
	/** Minimum width for NPM/badge images */
	BADGE_MIN_WIDTH: 50,
	/** Minimum height for NPM/badge images */
	BADGE_MIN_HEIGHT: 10,
	/** Default timeout for image loading in milliseconds */
	DEFAULT_TIMEOUT: 5000
} as const;

/**
 * Check if an image loads successfully with valid dimensions
 * @param url - The image URL to check
 * @param minWidth - Minimum width threshold (default: 50px)
 * @param minHeight - Minimum height threshold (default: 10px)
 * @param timeout - Timeout in milliseconds (default: 5000ms)
 * @returns Promise that resolves to true if image loaded successfully with valid dimensions
 */
export async function checkImageLoad(
	url: string,
	minWidth: number = IMAGE_VALIDATION.BADGE_MIN_WIDTH,
	minHeight: number = IMAGE_VALIDATION.BADGE_MIN_HEIGHT,
	timeout: number = IMAGE_VALIDATION.DEFAULT_TIMEOUT
): Promise<boolean> {
	if (typeof window === 'undefined') return false;

	return new Promise((resolve) => {
		const img = new Image();
		let settled = false;

		// Cleanup function to ensure handlers fire only once
		const done = (value: boolean) => {
			if (settled) return;
			settled = true;
			clearTimeout(timeoutId);
			img.onload = null;
			img.onerror = null;
			resolve(value);
		};

		const timeoutId = setTimeout(() => {
			// Best-effort: stop further work/callbacks
			try {
				img.src = '';
			} catch {
				// Ignore errors when clearing src
			}
			done(false);
		}, timeout);

		img.onload = () => {
			// Check if image has valid dimensions (not an error image)
			done(img.naturalWidth >= minWidth && img.naturalHeight >= minHeight);
		};

		img.onerror = () => {
			done(false);
		};

		img.src = url;
	});
}
