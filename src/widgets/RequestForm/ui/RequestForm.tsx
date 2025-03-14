import React, { useState, useCallback, useEffect } from "react";
import { Request } from "entities/request/model/types";
import { Category } from "entities/category/model/types";
import { Select } from "shared/ui/Select";
import { Button } from "shared/ui/Button";

interface RequestFormProps {
  onSubmit: (formData: Omit<Request, "id" | "createdAt">) => void;
  initialValues?: Omit<Request, 'id' | 'createdAt'>;
}

const RequestForm = ({ onSubmit, initialValues }: RequestFormProps) => {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [description, setDescription] = useState(
    initialValues?.description || "",
  );
  const [category, setCategory] = useState(initialValues?.category || "");

  // validate
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const categories: Category[] = [
    { id: "1", name: "первая" },
    { id: "2", name: "вторая" },
    { id: "3", name: "третья" },
  ];

  useEffect(() => {
    if (initialValues) {
      setTitle(initialValues.title || "");
      setDescription(initialValues.description || "");
      setCategory(initialValues.category || "");
    }
  }, [initialValues]);

  const validateForm = () => {
    let isValid = true;

    if (!title.trim()) {
        setTitleError("Название обязательно для заполнения");
        isValid = false;
    } else {
        setTitleError("");
    }

    if (!description.trim()) {
        setDescriptionError("Описание обязательно для заполнения");
        isValid = false;
    } else {
        setDescriptionError("");
    }

    if (!category) {
        setCategoryError("Категория обязательна для выбора");
        isValid = false;
    } else {
        setCategoryError("");
    }

    return isValid;
};

const handleSubmit = useCallback(
  (e: React.FormEvent) => {
      e.preventDefault();
      
      if (validateForm()) {
          onSubmit({title, description, category});
      }
  },
  [title, description, category, onSubmit],
);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[700px] mx-auto" noValidate>
      <div>
        <label
          htmlFor="title"
          className="block font-medium"
        >
          Название:
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Введите название заявки"
          className="block bg-input w-full rounded-md bg-foreground border border-gray-300 hover:border-gray-400 dark:border-none  px-3 py-1.5 focus:outline-2 focus:outline-primary placeholder:text-gray-400 sm:text-sm/6 shadow-sm"
        />
        {titleError && <p className="text-red-500 text-sm">{titleError}</p>}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block font-medium"
        >
          Описание:
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          placeholder="Введите описание заявки"
          className="block bg-input w-full rounded-md bg-foreground border border-gray-300 hover:border-gray-400 dark:border-none  px-3 py-1.5 focus:outline-2 focus:outline-primary placeholder:text-gray-400 sm:text-sm/6 shadow-sm"
        />
        {descriptionError && <p className="text-red-500 text-sm">{descriptionError}</p>}
      </div>

      <div>
        <label
          htmlFor="category"
          className="block font-medium"
        >
          Категория:
        </label>
        <Select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={categories.map((cat) => ({
            value: cat.id,
            label: cat.name,
          }))}
          required
          placeholder="Выберите категорию"
        />
        {categoryError && <p className="text-red-500 text-sm">{categoryError}</p>}
      </div>

      <Button
        type="submit"
      >
        Сохранить
      </Button>
    </form>
  );
};

export default RequestForm;
