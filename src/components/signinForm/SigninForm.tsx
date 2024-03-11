'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import useToastModal from '@/hooks/useToastModal';
import { signin, signinWithGoogle } from '@/lib/auth';
import { signinFormSchema } from '@/schema/signinFormSchema';

import FormNormalInput from '../inputs/formNormalInput/FormNormallnput';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Form } from '../ui/form';

import type { z } from 'zod';

export type SigninFormRegisterInput = z.infer<typeof signinFormSchema>;

const SigninForm = () => {
  const router = useRouter();
  const { toast } = useToastModal();

  const signinForm = useForm<SigninFormRegisterInput>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: SigninFormRegisterInput) => {
    try {
      await signin(data);
      router.push('/');
      router.refresh();
    } catch (error) {
      if (error instanceof Error) toast.warning(error.message, 2000);
    }
  };

  const onClickSigninWithGoogleBtn = async () => {
    await signinWithGoogle();
  };

  return (
    <section className="translate-center w-[380px]">
      <Card>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
          <CardDescription>이메일과 비밀번호를 입력해 주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...signinForm}>
            <form
              onSubmit={signinForm.handleSubmit(onSubmit)}
              className=" space-y-3"
            >
              <FormNormalInput
                control={signinForm.control}
                name="email"
                label="이메일"
                placeholder="이메일을 입력해 주세요."
              />
              <FormNormalInput
                control={signinForm.control}
                name="password"
                label="비밀번호"
                placeholder="비밀번호을 입력해 주세요."
                type="password"
              />
              <div className="flex gap-3">
                <Button type="submit">로그인 하기</Button>
                <Button
                  variant={'outline'}
                  type="button"
                  onClick={onClickSigninWithGoogleBtn}
                >
                  구글로 로그인
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default SigninForm;
