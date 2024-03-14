import { render, screen } from "@testing-library/react";
import Ads from './index';
import { ads } from './index';

describe('Ads component', () => {
    test('All ads render correctly', () => {
        render(<Ads />);

        // Check if all Ad images are rendered
        const adImages = screen.getAllByAltText((content, element) => {
            return element?.tagName.toLowerCase() === 'img' && content;
        });
        expect(adImages.length).toBe(6);

        // Check if all Ad links are ok
        const adLinks = screen.getAllByRole('link');
        expect(adLinks.length).toBe(6);
        adLinks.forEach((link, index) => {
            expect(link).toHaveAttribute('href', ads[index].link);
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noreferrer');
        });
    });
});
