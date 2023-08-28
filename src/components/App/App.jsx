import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { notifyInputNotImg } from '../Notify/Notify';
import { Wrapper } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { fetchImages } from '../API';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoadMore } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { LoaderBonus } from 'components/Loader/LoaderBonus';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    loadingBonus: false,
  };

  componentDidMount() {
    this.setState({
      loadingBonus: true,
    });
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      await this.setImages();
    }
  };

  setImages = async () => {
    this.setState({ loading: true, loadingBonus: false });
    const { query, page } = this.state;
    const correctQuery = query.split('/')[1];

    const foundImages = await fetchImages({ correctQuery, page });
    if (foundImages.length < 1) {
      notifyInputNotImg();
      this.setState({ loading: false, loadingBonus: true });
    } else {
      this.setState(prevState => ({
        images: [...prevState.images, ...foundImages],
        loading: false,
      }));
    }
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, loading, loadingBonus } = this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.changeQuery} />

        {loading ? (
          <Loader loaderColor="#3f51b5" />
        ) : (
          <ImageGallery images={images} />
        )}
        {loadingBonus && <LoaderBonus loaderColor="red" />}
        {images.length >= 12 && <LoadMore onClick={this.handleLoadMore} />}
        <ToastContainer />
      </Wrapper>
    );
  }
}
