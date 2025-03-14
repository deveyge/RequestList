import React, { useState, useCallback, useEffect } from "react";
import { Button } from "shared/ui/Button";
import Select from "shared/ui/Select";
import { Request } from "entities/request/model/types";
import { Category } from "entities/category/model/types";

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

  // const handleSubmit = useCallback(
  //   (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (!title || !description || !category) {
  //       alert("Заполните все поля!");
  //       return;
  //     }
  //     onSubmit({ title, description, category });
  //     setTitle("");
  //     setDescription("");
  //     setCategory("");
  //   },
  //   [title, description, category, onSubmit],
  // );
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!title || !description || !category) {
        alert("Заполните все поля!");
        return;
      }
      onSubmit({ title, description, category });
    },
    [title, description, category, onSubmit],
);

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-[700px] mx-auto">
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
