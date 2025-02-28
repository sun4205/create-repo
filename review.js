const handleAddItemSubmit = (item) => {
  console.log("handleAddItemSubmit called with item:", item);
  asyncSubmit(() =>
    addItem(item).then((newItem) => {
      console.log("Current clothingItems before update:", clothingItems);
      setClothingItems([newItem, ...clothingItems]);
    })
  );
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted with values:", values);
  handleAddItemSubmit(values);
};
