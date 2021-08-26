import { render, screen } from '@testing-library/react';
import { PostCards } from '.';
import { postCardPropsMock } from './Mock';

const props = postCardPropsMock;

describe('<PostCard />', () => {
  it('Should render PostCard correctly', () => {
    render(<PostCards {...props} />);

    expect(screen.getByRole('img', { name: 'title 1' })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCards {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
