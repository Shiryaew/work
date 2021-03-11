import React from 'react';
import { ScrollView } from 'react-native';
import CategoryListItem from './CategoryListItem';

class Categories extends React.Component {
    render() {
        const { categories, activeCategory, changeCategory } = this.props;
        return (
            <ScrollView horizontal
                showsHorizontalScrollIndicator={false}
                style={{
                    padding: 15,
                    backgroundColor: "gray",
                    paddingRight: 15,
                    elevation: 10
                }}>
                {categories.map((category) => {
                    const isActive = category.id === activeCategory;
                    return (
                        <CategoryListItem
                            name={category.name}
                            isActive={isActive}
                            onPress={() => { changeCategory(isActive ? undefined : category.id) }}
                        />
                    )
                })}
            </ScrollView>
        )
    }
}

export default Categories;