const handleAddItemSubmit = (item) => {
  console.log("handleAddItemSubmit called with item:", item);
  asyncSubmit(() =>
    addItem(item).then((newItem) => {
      console.log("Current clothingItems before update:", clothingItems);
      setClothingItems([newItem, ...clothingItems]);
    })
  );
};