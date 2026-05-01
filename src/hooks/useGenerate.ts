import { useStore } from '../store/useStore';
import { generateBlueprint } from '../services/api';

export const useGenerate = () => {
  const { idea, setLoading, setError, setBlueprint } = useStore();

  const handleGenerate = async () => {
    if (!idea.trim()) {
      setError('Idea cannot be empty.');
      return;
    }

    if (idea.trim().length < 10) {
      setError('Please provide a more detailed idea (at least 10 characters).');
      return;
    }

    if (idea.trim().length > 1000) {
      setError('Idea is too long (maximum 1000 characters).');
      return;
    }

    setLoading(true);
    setError(null);
    setBlueprint(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const result = await generateBlueprint(idea);
      setBlueprint(result);
    } catch (err: any) {
      setError(err.message || 'Error communicating with generation endpoint.');
    } finally {
      setLoading(false);
    }
  };

  return { handleGenerate };
};
