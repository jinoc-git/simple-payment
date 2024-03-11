import { useToast } from '@/components/ui/use-toast';

const useToastModal = () => {
  const { toast: toastModal } = useToast();

  const toast = {
    warning: (message: string, time: number) => {
      toastModal({
        variant: 'destructive',
        title: message,
        duration: time,
      });
    },
    default: (message: string, time: number) => {
      toastModal({
        variant: 'default',
        title: message,
        duration: time,
      });
    },
  };

  return { toast };
};

export default useToastModal;
