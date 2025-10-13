'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useEffect } from 'react'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Đang tải...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Đăng xuất
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Thông tin tài khoản</CardTitle>
              <CardDescription>Chi tiết tài khoản của bạn</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={session?.user?.image || session?.user?.avatar_url || ''} />
                  <AvatarFallback>
                    {session?.user?.name?.charAt(0) || session?.user?.email?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{session?.user?.name || 'Chưa có tên'}</div>
                  <div className="text-sm text-muted-foreground">{session?.user?.email}</div>
                  <div className="text-sm text-muted-foreground">@{session?.user?.username || 'username'}</div>
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <h4 className="text-sm font-medium mb-2">Thông tin cá nhân:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Bio:</span>
                    <p className="text-muted-foreground">{session?.user?.bio || 'Chưa có thông tin'}</p>
                  </div>
                  <div>
                    <span className="font-medium">Năm sinh:</span>
                    <p className="text-muted-foreground">{session?.user?.birth_year || 'Chưa cung cấp'}</p>
                  </div>
                  <div>
                    <span className="font-medium">Địa chỉ:</span>
                    <p className="text-muted-foreground">{session?.user?.address || 'Chưa cung cấp'}</p>
                  </div>
                  <div>
                    <span className="font-medium">Điện thoại:</span>
                    <p className="text-muted-foreground">{session?.user?.phone || 'Chưa cung cấp'}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bài viết</CardTitle>
              <CardDescription>Quản lý bài viết của bạn</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center text-muted-foreground py-8">
                <p>Chưa có bài viết nào</p>
                <p className="text-sm mt-2">Milestone C sẽ có chức năng tạo bài viết</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Thống kê</CardTitle>
              <CardDescription>Tổng quan hoạt động</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">Bài viết</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-muted-foreground">Lượt xem</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone Progress</CardTitle>
              <CardDescription>Theo roadmap SyberS Blog</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>✅ Milestone A: Auth & Database</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                  <span>⏳ Milestone B: Profile & RBAC</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                  <span>⏳ Milestone C: Posts & Editor</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}