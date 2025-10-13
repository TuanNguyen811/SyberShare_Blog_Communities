'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AuthDebugPage() {
  const [baseUrl, setBaseUrl] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')
  
  useEffect(() => {
    // Get the base URL of the application
    setBaseUrl(window.location.origin)
    
    // Calculate the redirect URL that will be used for Google OAuth
    setRedirectUrl(`${window.location.origin}/api/auth/callback/google`)
  }, [])
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl">Thông tin cấu hình OAuth</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Hướng dẫn cấu hình:</h3>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>Truy cập <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
              <li>Chọn dự án SyberShare</li>
              <li>Điều hướng tới "APIs & Services" &gt; "Credentials"</li>
              <li>Tìm và nhấp vào OAuth 2.0 Client ID cho ứng dụng web của bạn</li>
              <li>Trong phần "Authorized redirect URIs", thêm các URI sau:</li>
            </ol>
          </div>
          
          <div className="space-y-2 bg-gray-100 p-4 rounded">
            <p className="font-mono text-sm break-all">{redirectUrl}</p>
            <p className="font-mono text-sm break-all">http://localhost/api/auth/callback/google</p>
            <p className="font-mono text-sm break-all">http://127.0.0.1:3000/api/auth/callback/google</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium">Thông tin bổ sung:</h3>
            <p><strong>Base URL của ứng dụng:</strong> <span className="font-mono">{baseUrl}</span></p>
            <p><strong>Redirect URI dự kiến:</strong> <span className="font-mono">{redirectUrl}</span></p>
            <p className="text-sm text-gray-600">Nếu bạn đang chạy trên một cổng khác ngoài 3000, hãy chắc chắn rằng bạn đã thêm URI redirect cho cổng đó.</p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
            <p className="text-sm text-yellow-800">
              <strong>Lưu ý:</strong> Sau khi cập nhật URI redirect trong Google Cloud Console, có thể mất đến 5 phút để thay đổi có hiệu lực. Nếu bạn vẫn gặp lỗi "redirect_uri_mismatch" sau khi cập nhật, hãy đợi một chút và thử lại.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}